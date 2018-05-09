package org.tjjhjw;

/**
 * Created with IntelliJ IDEA.
 * User: shijinkui
 * Date: 13-3-19
 * Time: 下午5:10
 * To change this template use File | Settings | File Templates.
 */
public class Config {


    public String logpath = ".";
    public String ip = "127.0.0.1";
    public int port = 8080;
    public int min_thread = 128;
    public int max_thread = 512;
    //default http config
    public final static boolean useForwardedHeaders = true;
    //The maximum amount of time a connection is allowed to be idle before being closed.
    public final static int maxIdleTime = 60000;//(ms)

    //The number of threads dedicated to accepting connections. If omitted, this defaults to the
    //number of logical CPUs on the current machine.
    public final static int acceptorThreads = Runtime.getRuntime().availableProcessors() / 2 + 1;

    // The number of unaccepted requests to keep in the accept queue before refusing connections. If
    // set to -1 or omitted, the system default is used.
    public final static int acceptQueueSize = 12000;
    // The maximum number of buffers to keep in memory.
    public final static int maxBufferCount = 2048;
    // The initial buffer size for reading requests.
    public final static int requestBufferSize = 16 * 1024;
    public final static int requestHeaderBufferSize = 8 * 1024;
    public final static int responseBufferSize = 64 * 1024;
    public final static int responseHeaderBufferSize = 4 * 1024;
    public final static boolean reuseAddress = true;
    public final static int soLingerTime = 1000;//(ms)
    public final static int lowResourcesConnectionThreshold = 25000;
    public final static int lowResourcesMaxIdleTime = 1000;//(ms)
    public final static int shutdownGracePeriod = 2000;//(ms)
    public final static boolean useServerHeader = false;
    public final static boolean useDirectBuffers = true;
    public final static int acceptorThreadPriorityOffset = 0;
    public final static String DEFAULT_TEMPLATE_FOLDER = "src/main/web/WEB-INF/views/";

    public int getMin_thread() {
        return min_thread;
    }

    public void setMin_thread(int min_thread) {
        this.min_thread = min_thread;
    }

    public int getMax_thread() {
        return max_thread;
    }

    public void setMax_thread(int max_thread) {
        this.max_thread = max_thread;
    }
}
